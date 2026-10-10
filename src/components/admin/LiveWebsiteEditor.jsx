import React, { useState } from 'react';
import {
  FaTimes, FaSave, FaDownload, FaUpload, FaUndo, FaPlus, FaTrash,
  FaShieldAlt, FaUser, FaCode, FaBriefcase, FaCertificate, FaEnvelope,
  FaCheck, FaExternalLinkAlt, FaEye
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { useSiteData } from '../../contexts/SiteDataContext';

export default function LiveWebsiteEditor() {
  const { isEditorOpen, closeEditor, activeEditorTab, setActiveEditorTab } = useAuth();
  const {
    siteData,
    updateHero,
    updateAbout,
    updateSkills,
    updateProjects,
    updateCertifications,
    updateSocial,
    resetToDefaults,
    exportData,
    importData,
  } = useSiteData();

  const [savedToast, setSavedToast] = useState(false);

  if (!isEditorOpen) return null;

  const triggerSaveNotification = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  const handleHeroChange = (field, value) => {
    updateHero({ [field]: value });
  };

  const handleRolesChange = (csvString) => {
    const rolesArray = csvString.split(',').map((r) => r.trim()).filter(Boolean);
    updateHero({ roles: rolesArray });
  };

  const handleStatChange = (index, field, value) => {
    const newStats = [...siteData.hero.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    updateHero({ stats: newStats });
  };

  const handleAboutChange = (field, value) => {
    updateAbout({ [field]: value });
  };

  // Skill Helpers
  const handleSkillChange = (index, field, value) => {
    const newSkills = [...siteData.skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    updateSkills(newSkills);
  };

  const handleSkillTagsChange = (index, tagsString) => {
    const tagsArray = tagsString.split(',').map((t) => t.trim()).filter(Boolean);
    const newSkills = [...siteData.skills];
    newSkills[index] = { ...newSkills[index], tags: tagsArray };
    updateSkills(newSkills);
  };

  const handleAddSkill = () => {
    const newSkill = {
      id: `skill_${Date.now()}`,
      name: 'New Security Tool',
      role: 'Cybersecurity Testing',
      badge: 'Core Tool',
      iconKey: 'kali',
      iconColor: '#3368A0',
      description: 'Hands-on operational testing and vulnerability analysis.',
      tags: ['Security', 'VAPT'],
    };
    updateSkills([...siteData.skills, newSkill]);
  };

  const handleDeleteSkill = (index) => {
    const newSkills = siteData.skills.filter((_, i) => i !== index);
    updateSkills(newSkills);
  };

  // Project Helpers
  const handleProjectChange = (index, field, value) => {
    const newProjects = [...siteData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    updateProjects(newProjects);
  };

  const handleProjectTechChange = (index, techString) => {
    const techArray = techString.split(',').map((t) => t.trim()).filter(Boolean);
    const newProjects = [...siteData.projects];
    newProjects[index] = { ...newProjects[index], tech: techArray };
    updateProjects(newProjects);
  };

  const handleAddProject = () => {
    const newProj = {
      id: Date.now(),
      title: 'New Security Project',
      description: 'Brief overview of security architecture',
      longDescription: 'Detailed implementation, testing methodologies, and defensive capabilities.',
      tech: ['Python', 'Security', 'React'],
      github: 'https://github.com/pradeepgobi',
      category: 'security',
      image: '🛡️',
    };
    updateProjects([...siteData.projects, newProj]);
  };

  const handleDeleteProject = (index) => {
    const newProjects = siteData.projects.filter((_, i) => i !== index);
    updateProjects(newProjects);
  };

  // Certifications Helpers
  const handleCertChange = (index, field, value) => {
    const newCerts = [...siteData.certifications];
    newCerts[index] = { ...newCerts[index], [field]: value };
    updateCertifications(newCerts);
  };

  const handleAddCert = () => {
    const newCert = {
      id: Date.now(),
      title: 'New Certification',
      issuer: 'Cisco Networking Academy',
      date: '2026',
      description: 'Verified professional qualification',
      skills: ['Network Security', 'Auditing'],
      image: '/cert/1.png',
      certificateId: 'Verified Certificate',
    };
    updateCertifications([...siteData.certifications, newCert]);
  };

  const handleDeleteCert = (index) => {
    const newCerts = siteData.certifications.filter((_, i) => i !== index);
    updateCertifications(newCerts);
  };

  // Social Helpers
  const handleSocialChange = (field, value) => {
    updateSocial({ [field]: value });
  };

  const handleImportFile = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (importData(parsed)) {
            triggerSaveNotification();
          } else {
            alert('Invalid JSON structure');
          }
        } catch (err) {
          alert('Failed to parse JSON file');
        }
      };
    }
  };

  const navTabs = [
    { id: 'hero', label: 'Hero', icon: FaShieldAlt },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaBriefcase },
    { id: 'certs', label: 'Certs', icon: FaCertificate },
    { id: 'social', label: 'Contact', icon: FaEnvelope },
    { id: 'publish', label: 'Publish', icon: FaSave },
  ];

  return (
    <aside 
      aria-label="Website Editor Portal"
      className="fixed inset-y-0 right-0 z-[9998] w-full sm:w-[580px] lg:w-[680px] bg-[#F2EFE7] border-l-2 border-[#3368A0]/40 shadow-2xl flex flex-col font-sans text-[#254F7A] animate-slideLeft"
    >
      {/* Header Bar */}
      <div className="bg-[#254F7A] text-white px-6 py-4 flex items-center justify-between border-b border-cyan-400/20 shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300">
            <FaShieldAlt className="text-base" />
          </div>
          <div>
            <h2 className="font-mono text-sm font-black tracking-wider uppercase flex items-center gap-2">
              <span>LIVE WEBSITE EDITOR</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                ACTIVE
              </span>
            </h2>
            <p className="text-[11px] font-mono text-cyan-200/80">
              Changes reflect live on your website instantly
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              triggerSaveNotification();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold transition-all shadow-sm cursor-pointer"
            title="Publish changes to website"
          >
            <FaSave />
            <span>Publish</span>
          </button>
          <button
            onClick={closeEditor}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Close Editor"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-[#3368A0] px-4 py-2 flex items-center gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeEditorTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveEditorTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#F2EFE7] text-[#254F7A] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="text-xs" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Toast Notification */}
      {savedToast && (
        <div className="bg-emerald-100 border-b border-emerald-300 px-6 py-2 flex items-center justify-between text-emerald-800 font-mono text-xs">
          <span className="flex items-center gap-2">
            <FaCheck className="text-emerald-600" />
            <span>Changes published and saved to website storage!</span>
          </span>
          <span className="text-[10px] text-emerald-600">LIVE SYNCED</span>
        </div>
      )}

      {/* Scrollable Editor Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* ═══════════ TAB 1: HERO ═══════════ */}
        {activeEditorTab === 'hero' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-[#3368A0]/20 pb-2">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#254F7A]">
                Hero Section Content
              </h3>
              <p className="text-xs text-slate-500">Edit the primary headline, typing roles, and stats.</p>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                Full Display Name (Typewriter Animated)
              </label>
              <input
                type="text"
                value={siteData.hero.name || ''}
                onChange={(e) => handleHeroChange('name', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-bold text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0]"
              />
            </div>

            {/* Eyebrow */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                Eyebrow Text
              </label>
              <input
                type="text"
                value={siteData.hero.eyebrow || ''}
                onChange={(e) => handleHeroChange('eyebrow', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0]"
              />
            </div>

            {/* Roles CSV */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                Typewriter Roles (Comma Separated)
              </label>
              <input
                type="text"
                value={(siteData.hero.roles || []).join(', ')}
                onChange={(e) => handleRolesChange(e.target.value)}
                placeholder="Cybersecurity Engineer, Penetration Tester, CTF Player"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-mono text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0]"
              />
              <p className="text-[11px] text-slate-500 mt-1">Separate multiple titles with commas.</p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                Bio Description Paragraph
              </label>
              <textarea
                rows={3}
                value={siteData.hero.description || ''}
                onChange={(e) => handleHeroChange('description', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0] leading-relaxed"
              />
            </div>

            {/* Stats Editor */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-2">
                Stats Counters (4 Columns)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(siteData.hero.stats || []).map((stat, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-[#3368A0]/20 space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-400">Card {i + 1}</span>
                    <input
                      type="text"
                      value={stat.num}
                      onChange={(e) => handleStatChange(i, 'num', e.target.value)}
                      placeholder="e.g. 2+"
                      className="w-full px-2 py-1 rounded bg-[#F2EFE7]/50 border border-slate-200 text-xs font-bold font-mono"
                    />
                    <input
                      type="text"
                      value={stat.lbl}
                      onChange={(e) => handleStatChange(i, 'lbl', e.target.value)}
                      placeholder="e.g. Years Learning"
                      className="w-full px-2 py-1 rounded bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Resume File URL */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                Resume PDF Path
              </label>
              <input
                type="text"
                value={siteData.hero.resumePdf || '/pradeep.pdf'}
                onChange={(e) => handleHeroChange('resumePdf', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-mono text-[#254F7A]"
              />
            </div>
          </div>
        )}

        {/* ═══════════ TAB 2: ABOUT ═══════════ */}
        {activeEditorTab === 'about' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-[#3368A0]/20 pb-2">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#254F7A]">
                About Section Content
              </h3>
              <p className="text-xs text-slate-500">Edit educational qualifications, CGPA, and personal background.</p>
            </div>

            {/* Paragraph 1 */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                Introduction Paragraph 1
              </label>
              <textarea
                rows={3}
                value={siteData.about.intro1 || ''}
                onChange={(e) => handleAboutChange('intro1', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0]"
              />
            </div>

            {/* Paragraph 2 */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1.5">
                Introduction Paragraph 2
              </label>
              <textarea
                rows={3}
                value={siteData.about.intro2 || ''}
                onChange={(e) => handleAboutChange('intro2', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm text-[#254F7A] focus:outline-none focus:ring-2 focus:ring-[#3368A0]"
              />
            </div>

            {/* College Details */}
            <div className="p-4 rounded-xl bg-white border border-[#3368A0]/20 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-[#3368A0] block">
                College Education Details
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">College Name</label>
                  <input
                    type="text"
                    value={siteData.about.collegeName || ''}
                    onChange={(e) => handleAboutChange('collegeName', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Degree Program</label>
                  <input
                    type="text"
                    value={siteData.about.degree || ''}
                    onChange={(e) => handleAboutChange('degree', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Current Year / Status</label>
                  <input
                    type="text"
                    value={siteData.about.year || ''}
                    onChange={(e) => handleAboutChange('year', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">CGPA</label>
                  <input
                    type="text"
                    value={siteData.about.cgpa || ''}
                    onChange={(e) => handleAboutChange('cgpa', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-bold text-[#254F7A]"
                  />
                </div>
              </div>
            </div>

            {/* School Details */}
            <div className="p-4 rounded-xl bg-white border border-[#3368A0]/20 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-[#3368A0] block">
                School Education Details
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">School Name</label>
                  <input
                    type="text"
                    value={siteData.about.schoolName || ''}
                    onChange={(e) => handleAboutChange('schoolName', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Percentage / Marks</label>
                  <input
                    type="text"
                    value={siteData.about.schoolPercentage || ''}
                    onChange={(e) => handleAboutChange('schoolPercentage', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-bold text-[#254F7A]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ TAB 3: SKILLS ═══════════ */}
        {activeEditorTab === 'skills' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#3368A0]/20 pb-2">
              <div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#254F7A]">
                  Cybersecurity Skills Toolkit
                </h3>
                <p className="text-xs text-slate-500">Edit, add, or customize tools in your arsenal.</p>
              </div>
              <button
                onClick={handleAddSkill}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3368A0] text-white text-xs font-mono font-bold hover:bg-[#254F7A] transition-colors cursor-pointer"
              >
                <FaPlus className="text-xs" />
                <span>Add Skill</span>
              </button>
            </div>

            <div className="space-y-4">
              {(siteData.skills || []).map((skill, index) => (
                <div
                  key={skill.id || index}
                  className="p-4 rounded-xl bg-white border border-[#3368A0]/25 shadow-sm space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#3368A0] uppercase">
                      Skill #{index + 1}: {skill.name}
                    </span>
                    <button
                      onClick={() => handleDeleteSkill(index)}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                      title="Delete this skill"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">Tool Name</label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">Subheading / Role</label>
                      <input
                        type="text"
                        value={skill.role}
                        onChange={(e) => handleSkillChange(index, 'role', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">Badge Tag</label>
                      <input
                        type="text"
                        value={skill.badge}
                        onChange={(e) => handleSkillChange(index, 'badge', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">Tags (Comma Separated)</label>
                      <input
                        type="text"
                        value={(skill.tags || []).join(', ')}
                        onChange={(e) => handleSkillTagsChange(index, e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={skill.description}
                      onChange={(e) => handleSkillChange(index, 'description', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════ TAB 4: PROJECTS ═══════════ */}
        {activeEditorTab === 'projects' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#3368A0]/20 pb-2">
              <div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#254F7A]">
                  Projects Portfolio
                </h3>
                <p className="text-xs text-slate-500">Edit titles, descriptions, tech stacks, and repo URLs.</p>
              </div>
              <button
                onClick={handleAddProject}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3368A0] text-white text-xs font-mono font-bold hover:bg-[#254F7A] transition-colors cursor-pointer"
              >
                <FaPlus className="text-xs" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="space-y-4">
              {(siteData.projects || []).map((project, index) => (
                <div
                  key={project.id || index}
                  className="p-4 rounded-xl bg-white border border-[#3368A0]/25 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#3368A0] uppercase">
                      Project #{index + 1}: {project.title}
                    </span>
                    <button
                      onClick={() => handleDeleteProject(index)}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                      title="Delete this project"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">Project Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">Category</label>
                      <select
                        value={project.category || 'security'}
                        onChange={(e) => handleProjectChange(index, 'category', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                      >
                        <option value="security">Security</option>
                        <option value="web">Web Application</option>
                        <option value="all">General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 mb-1">Short Description</label>
                    <input
                      type="text"
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 mb-1">Detailed Description</label>
                    <textarea
                      rows={2}
                      value={project.longDescription || ''}
                      onChange={(e) => handleProjectChange(index, 'longDescription', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">Tech Stack (Comma Separated)</label>
                      <input
                        type="text"
                        value={(project.tech || []).join(', ')}
                        onChange={(e) => handleProjectTechChange(index, e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-600 mb-1">GitHub URL</label>
                      <input
                        type="text"
                        value={project.github || ''}
                        onChange={(e) => handleProjectChange(index, 'github', e.target.value)}
                        placeholder="https://github.com/..."
                        className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 mb-1">Live Demo URL (Optional)</label>
                    <input
                      type="text"
                      value={project.liveDemo || ''}
                      onChange={(e) => handleProjectChange(index, 'liveDemo', e.target.value)}
                      placeholder="https://your-live-demo.com"
                      className="w-full px-3 py-1.5 rounded-lg bg-[#F2EFE7]/50 border border-slate-200 text-xs font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════ TAB 5: CERTIFICATIONS ═══════════ */}
        {activeEditorTab === 'certs' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#3368A0]/20 pb-2">
              <div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#254F7A]">
                  Certifications ({siteData.certifications.length})
                </h3>
                <p className="text-xs text-slate-500">Edit credentials, issuers, and completion dates.</p>
              </div>
              <button
                onClick={handleAddCert}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3368A0] text-white text-xs font-mono font-bold hover:bg-[#254F7A] transition-colors cursor-pointer"
              >
                <FaPlus className="text-xs" />
                <span>Add Certificate</span>
              </button>
            </div>

            <div className="space-y-3">
              {(siteData.certifications || []).map((cert, index) => (
                <div
                  key={cert.id || index}
                  className="p-3.5 rounded-xl bg-white border border-[#3368A0]/25 shadow-sm space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#3368A0]">
                      #{index + 1}: {cert.title}
                    </span>
                    <button
                      onClick={() => handleDeleteCert(index)}
                      className="p-1 rounded text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={cert.title}
                      placeholder="Title"
                      onChange={(e) => handleCertChange(index, 'title', e.target.value)}
                      className="px-2.5 py-1.5 rounded bg-[#F2EFE7]/50 border border-slate-200 text-xs font-bold"
                    />
                    <input
                      type="text"
                      value={cert.issuer}
                      placeholder="Issuer"
                      onChange={(e) => handleCertChange(index, 'issuer', e.target.value)}
                      className="px-2.5 py-1.5 rounded bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                    />
                    <input
                      type="text"
                      value={cert.date}
                      placeholder="Date"
                      onChange={(e) => handleCertChange(index, 'date', e.target.value)}
                      className="px-2.5 py-1.5 rounded bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                    />
                    <input
                      type="text"
                      value={cert.certificateId || ''}
                      placeholder="Verification Link / ID"
                      onChange={(e) => handleCertChange(index, 'certificateId', e.target.value)}
                      className="px-2.5 py-1.5 rounded bg-[#F2EFE7]/50 border border-slate-200 text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════ TAB 6: CONTACT & SOCIAL ═══════════ */}
        {activeEditorTab === 'social' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-[#3368A0]/20 pb-2">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#254F7A]">
                Contact & Social Handles
              </h3>
              <p className="text-xs text-slate-500">Edit contact email, phone, and professional profiles.</p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1">
                  Primary Email
                </label>
                <input
                  type="email"
                  value={siteData.social.email || ''}
                  onChange={(e) => handleSocialChange('email', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-mono text-[#254F7A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={siteData.social.phone || ''}
                  onChange={(e) => handleSocialChange('phone', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-mono text-[#254F7A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  value={siteData.social.linkedin || ''}
                  onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-mono text-[#254F7A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="text"
                  value={siteData.social.github || ''}
                  onChange={(e) => handleSocialChange('github', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-mono text-[#254F7A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#254F7A] uppercase mb-1">
                  Live Portfolio URL
                </label>
                <input
                  type="text"
                  value={siteData.social.portfolio || ''}
                  onChange={(e) => handleSocialChange('portfolio', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#3368A0]/30 text-sm font-mono text-[#254F7A]"
                />
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ TAB 7: PUBLISH & EXPORT ═══════════ */}
        {activeEditorTab === 'publish' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-[#3368A0]/20 pb-2">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#254F7A]">
                Publish & Export Options
              </h3>
              <p className="text-xs text-slate-500">
                Your edits are saved and live in your browser. Use these options to export or reset.
              </p>
            </div>

            {/* Quick Publish Card */}
            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-400/50 shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <FaCheck className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#254F7A]">Live Publish State</h4>
                  <p className="text-xs text-slate-500">
                    All edits are actively saved and will persist on refresh.
                  </p>
                </div>
              </div>
              <button
                onClick={triggerSaveNotification}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FaSave /> Confirm Publish to Live Site
              </button>
            </div>

            {/* Export JSON */}
            <div className="p-5 rounded-2xl bg-white border border-[#3368A0]/20 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3368A0]/10 text-[#3368A0] flex items-center justify-center">
                  <FaDownload className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#254F7A]">Export portfolio_site_data.json</h4>
                  <p className="text-xs text-slate-500">
                    Download complete site configuration to commit to your GitHub repository.
                  </p>
                </div>
              </div>
              <button
                onClick={exportData}
                className="w-full py-2.5 rounded-xl bg-[#254F7A] hover:bg-[#3368A0] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FaDownload /> Download JSON Configuration
              </button>
            </div>

            {/* Import JSON */}
            <div className="p-5 rounded-2xl bg-white border border-[#3368A0]/20 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3368A0]/10 text-[#3368A0] flex items-center justify-center">
                  <FaUpload className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#254F7A]">Import Configuration File</h4>
                  <p className="text-xs text-slate-500">Restore or load previously exported site data.</p>
                </div>
              </div>
              <label className="w-full py-2.5 rounded-xl border-2 border-dashed border-[#3368A0]/40 hover:bg-slate-50 text-[#3368A0] font-mono font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer text-center">
                <FaUpload /> Choose JSON File to Import
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>

            {/* Reset Defaults */}
            <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 shadow-sm space-y-3">
              <div>
                <h4 className="font-bold text-sm text-red-800">Factory Reset</h4>
                <p className="text-xs text-red-600/80">
                  Discard all manual edits and restore original default content.
                </p>
              </div>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to reset all data back to original defaults?')) {
                    resetToDefaults();
                    triggerSaveNotification();
                  }
                }}
                className="py-2 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
              >
                <FaUndo /> Reset All Content
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Footer Controls */}
      <div className="bg-white px-6 py-3.5 border-t border-[#3368A0]/20 flex items-center justify-between shrink-0">
        <span className="text-[11px] font-mono text-slate-500">
          Admin: pradeepgobi8@gmail.com
        </span>
        <button
          onClick={closeEditor}
          className="px-4 py-1.5 rounded-lg bg-[#3368A0] hover:bg-[#254F7A] text-white font-mono text-xs font-bold transition-all cursor-pointer"
        >
          Done Editing
        </button>
      </div>
    </aside>
  );
}
