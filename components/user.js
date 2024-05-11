import React from "react";

export default function User({user}) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}
