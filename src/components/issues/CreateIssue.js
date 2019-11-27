import React from 'react';
import { useInput } from '../../hooks/useIput';
import axiosWA from '../../utils/axiosWithAuth';

export default function CreateIssue() {
  const [title, setTitle, handleTitle] = useInput("");
  const [description, setDescription, handleDescription] = useInput("");
  const [equipment, setEquipment, handleEquipment] = useInput("");
  const [generalIssue, setGeneralIssue, handleGeneralIssue] = useInput("");
  const [estimatedCost, setEstimatedCost, handleEstimatedCost] = useInput("");
  const [completed, setCompleted, handleCompleted] = useInput(false);
  const [needsAttention, setNeedsAttention, handleNeedsAttention] = useInput(false);
  const [scheduled, setScheduled, handleScheduled] = useInput(false);

  const newIssue = {
    title: title,
    description: description,
    equipment: equipment,
    general_issues: generalIssue,
    estimated_cost: estimatedCost,
    completed: completed,
    needs_attention: needsAttention,
    scheduled: scheduled
  }

  console.log("CreateIssue, newIssue: ", newIssue)

  return (
    <div className="create-issue">
      <form action="" className="issue-form">
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          onChange={e => handleTitle(e.target.value)}
          name="title" type="text" />
        <label htmlFor="description">Description:</label>
        <textarea name="description" />
        <label htmlFor="equipment">Equipment:</label>
        <input
          value={description}
          onChange={e => handleDescription(e.target.value)}
          name="equipment" type="text" />
        <label htmlFor="general_issues">General Issues:</label>
        <input
          value={generalIssue}
          onChange={e => handleGeneralIssue(e.target.value)}
          name="general_issues" type="text" />
        <label htmlFor="est_cost">Estimated Costs:</label>
        <input
          value={estimatedCost}
          onChange={e => handleEstimatedCost(e.target.value)}
          name="est_cost" type="text" />

        <input type="submit" />
      </form>

    </div>
  )
}

/*

<div className="issue-status">


        </div>


<div className="checkbox-inputs">
<label htmlFor="completed">Completed</label>
<input
onChange={e => handleCompleted(e.target.value)}
name="status" id="completed" type="checkbox" value={!completed} />
</div>
<div className="checkbox-inputs">
<label htmlFor="needs_attention">Needs Attention</label>
<input
onChange={e => handleNeedsAttention(e.target.value)}
name="status" id="needs_attention" type="checkbox" value={!needsAttention} />
</div>
<div className="checkbox-inputs">
<label htmlFor="schedueld">Scheduled</label>
<input
onChange={e => handleScheduled(e.target.value)}
name="status" id="scheduled" type="checkbox" value="scheduled" value={!scheduled} />
</div>


*/