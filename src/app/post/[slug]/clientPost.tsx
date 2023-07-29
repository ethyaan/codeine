"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { PostType } from "@/common/types/post";
import { pushPost } from "@/redux/entities/post";

export default function ClientPost({
  post,
  children,
}: {
  post: PostType;
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(pushPost(post));
  });
  return <>{children}</>;
}
