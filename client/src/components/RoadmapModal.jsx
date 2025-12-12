// RoadmapModal.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

export default function RoadmapModal({ isOpen, onClose, onGenerate }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { knownSkills: '', targetSkill: '', hoursPerDay: 2 }
  });

  const submit = data => {
    const normalized = {
      knownSkills: data.knownSkills.split(',').map(s => s.trim()).filter(Boolean),
      target: data.targetSkill,
      hoursPerDay: Number(data.hoursPerDay)
    };
    onGenerate && onGenerate(normalized);
    reset();
    onClose && onClose();
  };

  return (
    <div id="roadmapModal" className="modal" aria-hidden={!isOpen}>
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <h2>Create your roadmap</h2>
        <form className="roadmap-form" onSubmit={handleSubmit(submit)}>
          <label>
            <span>Known skills (comma separated)</span>
            <input id="knownSkills" {...register('knownSkills', { required: true })} />
          </label>

          <label>
            <span>Target (role or skill)</span>
            <input id="targetSkill" {...register('targetSkill', { required: true })} />
          </label>

          <label>
            <span>Hours per day</span>
            <input id="hoursPerDay" type="number" min="1" max="10" {...register('hoursPerDay', { valueAsNumber: true })} />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn primary">Generate</button>
            <button type="button" className="btn ghost" onClick={() => { reset(); onClose(); }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
