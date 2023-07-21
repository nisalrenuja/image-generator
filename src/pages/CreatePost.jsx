import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, Loader } from "../components";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const handleSubmit = () => {};
  const handleChange = (e) => {};
  const handleSurpriseMe = () => {};
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create Image
        </h1>
        <p className="mt-2 text-[14px] max-w-[800px] text-[#666e75]">
          Generate an imaginative image through DALL-E AI and share it with the
          community.
        </p>
      </div>
      <form className="max-w-3xl mt-16" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            label="Name"
            placeholder="Nisal Renuja Palliyaguru"
            value={form.name}
            handleChange={handleChange}
            name="name"
            type="text"
          />
          <FormField
            label="Prompt"
            placeholder="a pencil and watercolor drawing of a bright city in the future with flying cars"
            value={form.prompt}
            handleChange={handleChange}
            name="prompt"
            type="text"
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
