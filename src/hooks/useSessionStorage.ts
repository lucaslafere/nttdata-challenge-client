import { useEffect, useState } from "react";

type InitialValueType<T> = T | (() => T);

function getSavedValue<T>(key: string, initialValue: InitialValueType<T>): T {
  const savedValue = JSON.parse(sessionStorage.getItem(key) as string);
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useSessionStorage<T>(
  key: string,
  initialValue: InitialValueType<T>
) {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue<T>(key, initialValue);
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
