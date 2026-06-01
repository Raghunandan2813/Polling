import { useEffect, useState } from "react";
import { usePolling } from "./usePolling";
import { getPosts } from "../api/posts";
import { getUsers, buildUserMap } from "../api/users";
import { pollActivity } from "../api/activity";

export function useFeed() {
  const [notifications, setNotifications] = useState([]);

  const posts = usePolling(getPosts, 20000);
  const users = usePolling(getUsers, 60000);
  const activity = usePolling(pollActivity, 7000);

  useEffect(() => {
    if (!activity.data?.newCount) return;
    const note = {
      id: Date.now(),
      text: `${activity.data.newCount} new item${activity.data.newCount > 1 ? "s" : ""}`,
      ts: new Date(),
    };
    setNotifications((prev) => [note, ...prev].slice(0, 10));
  }, [activity.data?.ts]);

  return {
    posts: posts.data ?? [],
    userMap: buildUserMap(users.data ?? []),
    activity: activity.data?.items ?? [],
    notifications,
    loading: posts.loading,
    error: posts.error,
    lastSync: posts.updatedAt,
    clearNotifications: () => setNotifications([]),
  };
}
