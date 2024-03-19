import React from "react";
import { TicketForm } from "../Components/TicketForm";
import { useActionData, useNavigation } from "react-router-dom";

export const CreateTicket = ({}) => {
  const { state } = useNavigation;
  const errors = useActionData();
  const isSubmitting = state === "submitting";
  return (
    <>
      <h1 className="page-title">New Ticket</h1>
      <TicketForm isSubmitting={isSubmitting} errors={errors} />
    </>
  );
};
