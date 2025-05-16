import axios from "axios";
import { useCallback, useState } from "react";

import type { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          navigation("/home");
          showMessage({ title: "ログインしました", type: "success" });
        } else {
          showMessage({ title: "ユーザーが見つかりません", type: "error" });
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", type: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { login, loading };
};
