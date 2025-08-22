"use client";

type Props = {
  error: Error;
};

const error = ({ error }: Props) => {
  return <p>Something went wrong {error.message}</p>;
};

export default error;
