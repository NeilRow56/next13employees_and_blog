"use client";

import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HartIconFilled } from "@heroicons/react/24/solid";

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(tweet?.likes);
  const [liked, setLiked] = useState(null);
  useEffect(() => {
    if (liked === null) return;

    const endpoint = liked
      ? `/api/tweets/${tweet.id}/like`
      : `/api/tweets/${tweet.id}/unlike`;

    fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ tweet }) => {
        setLikes(tweet?.likes);
      });
  }, [liked, tweet.id]);

  const handleClick = () => setLiked((liked) => !liked);

  return (
    <li className="my-3 rounded bg-stone-200 p-4 text-stone-500">
      <div className="flex justify-between">
        <p>{tweet.body}</p>
        <div className="flex items-center gap-2">
          <button onClick={handleClick}>
            {liked ? (
              <HartIconFilled className="h-7 w-7 text-red-500" />
            ) : (
              <HeartIcon className="h-7 w-7 text-red-500" />
            )}
          </button>
          <span className="w-10 px-1 text-right text-sm">{likes}</span>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
