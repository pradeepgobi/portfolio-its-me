import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultSiteData } from '../data/defaultSiteData';

const SiteDataContext = createContext();
const STORAGE_KEY = 'portfolio_site_data_v1';

export const SiteDataProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultSiteData,
          ...parsed,
          hero: { ...defaultSiteData.hero, ...(parsed.hero || {}) },
          about: { ...defaultSiteData.about, ...(parsed.about || {}) },
          social: { ...defaultSiteData.social, ...(parsed.social || {}) },
          skills: Array.isArray(parsed.skills) && parsed.skills.length > 0 ? parsed.skills : defaultSiteData.skills,
          projects: (() => {
            if (!Array.isArray(parsed.projects) || parsed.projects.length === 0) {
              return defaultSiteData.projects;
            }
            const existingTitles = new Set(
              parsed.projects.map((p) => (p.title || '').toLowerCase().trim())
            );
            const missingFromDefault = defaultSiteData.projects.filter(
              (p) => !existingTitles.has((p.title || '').toLowerCase().trim())
            );
            return missingFromDefault.length > 0
              ? [...missingFromDefault, ...parsed.projects]
              : parsed.projects;
          })(),
          certifications: Array.isArray(parsed.certifications) && parsed.certifications.length > 0 ? parsed.certifications : defaultSiteData.certifications,
        };
      }
    } catch (e) {
      console.warn('Failed to load portfolio_site_data from storage', e);
    }
    return defaultSiteData;
  });

  const [lastSaved, setLastSaved] = useState(null);

  // Helper to persist state
  const persist = (nextData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextData));
      setLastSaved(new Date().toLocaleTimeString());
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const updateSection = (section, partialData) => {
    setSiteData((prev) => {
      const next = {
        ...prev,
        [section]: Array.isArray(partialData)
          ? partialData
          : { ...prev[section], ...partialData },
      };
      persist(next);
      return next;
    });
  };

  const updateHero = (data) => updateSection('hero', data);
  const updateAbout = (data) => updateSection('about', data);
  const updateSkills = (data) => updateSection('skills', data);
  const updateProjects = (data) => updateSection('projects', data);
  const updateCertifications = (data) => updateSection('certifications', data);
  const updateSocial = (data) => updateSection('social', data);

  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setSiteData(defaultSiteData);
    setLastSaved(new Date().toLocaleTimeString());
  };

  const exportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(siteData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'portfolio_site_data.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importData = (jsonObj) => {
    if (!jsonObj || typeof jsonObj !== 'object') return false;
    const next = {
      ...defaultSiteData,
      ...jsonObj,
      hero: { ...defaultSiteData.hero, ...(jsonObj.hero || {}) },
      about: { ...defaultSiteData.about, ...(jsonObj.about || {}) },
      social: { ...defaultSiteData.social, ...(jsonObj.social || {}) },
      skills: Array.isArray(jsonObj.skills) ? jsonObj.skills : defaultSiteData.skills,
      projects: Array.isArray(jsonObj.projects) ? jsonObj.projects : defaultSiteData.projects,
      certifications: Array.isArray(jsonObj.certifications) ? jsonObj.certifications : defaultSiteData.certifications,
    };
    setSiteData(next);
    persist(next);
    return true;
  };

  return (
    <SiteDataContext.Provider
      value={{
        siteData,
        updateSection,
        updateHero,
        updateAbout,
        updateSkills,
        updateProjects,
        updateCertifications,
        updateSocial,
        resetToDefaults,
        exportData,
        importData,
        lastSaved,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
