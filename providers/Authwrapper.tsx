"use client";

import React from "react";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import Loading from "@/components/shared/Loading";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return (
    <>
      <Authenticated>{children}</Authenticated>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <Unauthenticated>loading</Unauthenticated>
    </>
  );
};

export default AuthWrapper;
