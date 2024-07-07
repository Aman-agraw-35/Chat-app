"use client";

import React from "react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import Loading from "@/components/shared/Loading";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return (
    <>
    <Unauthenticated>Not loading</Unauthenticated>
      <Authenticated>{children}</Authenticated>
      <AuthLoading>
        <Loading />
      </AuthLoading>
    </>
  );
};

export default AuthWrapper;
