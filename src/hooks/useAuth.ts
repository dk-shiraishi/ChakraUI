import axios from "axios";
import { useCallback, useState } from "react";

import type { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
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
    },
    [setLoginUser]
  );
  return { login, loading };
};
