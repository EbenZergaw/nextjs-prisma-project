"use client";

import prisma from "@/prisma/client";
import React, { useState } from "react";
import z from "zod";
import { createPost, getPosts } from "../_actions";

import {useContext} from 'react'
import { PostsContext } from '../context/PostsContext';

export const formSchema = z.object({ 
    title: z.string(), 
    content: z.string(),
});

function Form() {

  const {getData} = useContext(PostsContext)

  return (
    <form onSubmit={async (e) => {
        e.preventDefault();

        const formValues = new FormData(e.currentTarget);

        const title = formValues.get("title")
        const content = formValues.get("content")


        await createPost({title, content})
        getData()

    }}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <br />
      <br />
      <input
        name="content"
        type="text"
        placeholder="Content"
        className="textarea textarea-primary w-92 h-36"
      />
      <br />
      <br />
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default Form;
