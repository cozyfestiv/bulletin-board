import React from "react";
import { Form } from "react-router-dom";
import { FormGroup } from "./FormGroup";

export const TicketForm = ({
  isSubmitting,
  errors = {},
  defaultValue = {},
}) => {
  return (
    <section>
      <Form method="post">
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="ticketName">Ticket Name:</label>
          <input
            type="text"
            id="ticketName"
            name="ticketName"
            defaultValue={defaultValue.title}
            placeholder="Enter Ticket Name..."
            required
          />
        </FormGroup>
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="createdBy">Created By:</label>
          <select id="dropdown" value={defaultValue.userId}>
            <option value="">Select...</option>
            <option value="chrisIbarra">Chris Ibarra</option>
            <option value="gregTopscher">Greg Topscher</option>
            <option value="kiaMoua">Kia Moua</option>
          </select>
        </FormGroup>
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="ticketDate">Date:</label>
          <input type="date" id="ticketDate" name="ticketDate" />
        </FormGroup>
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" id="dueDate" name="dueDate" />
        </FormGroup>
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="status">Status:</label>
          <select id="dropdown" value={defaultValue.status}>
            <option value="">Select...</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </FormGroup>
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="type">Type:</label>
          <select id="dropdown" value={defaultValue.type}>
            <option value="">Select...</option>
            <option value="featureRequest">Feature Request</option>
            <option value="bug">Bug</option>
            <option value="re-design">Re-Design</option>
            <option value="other">Other</option>
          </select>
        </FormGroup>
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Enter Description..."
          ></textarea>
        </FormGroup>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="..">
            Cancel
          </Link>
          <button disabled={isSubmitting} className="btn">
            {isSubmitting ? "Saving" : "Save"}
          </button>
        </div>
      </Form>
    </section>
  );
};

// ticket name : input
// created by : dropdown
// ticket-date : date
// due date : date
// status: dropdown
// type: dropdown
// description: textarea
