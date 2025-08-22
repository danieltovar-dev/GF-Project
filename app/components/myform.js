"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { FormEvent, useState } from "react";

export default function MyForm() {
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");

  // Use the mutation hook to get the createResponse function
  const createResponse = useMutation(api.responses.createResponse);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createResponse({
      response_1: response1,
      response_2: response2,
      response_3: response3,
    });
    // Clear the form after submission
    setResponse1("");
    setResponse2("");
    setResponse3("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Response 1"
        value={response1}
        onChange={(e) => setResponse1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Response 2"
        value={response2}
        onChange={(e) => setResponse2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Response 3"
        value={response3}
        onChange={(e) => setResponse3(e.target.value)}
      />
      <button type="submit">Submit Responses</button>
    </form>
  );
}