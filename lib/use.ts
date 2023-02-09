import { useState } from "react";

export function useShow(
  initialState: boolean = false
): [boolean, () => void, () => void] {
  const [isShowing, setIsShowing] = useState(initialState);
  const show = () => setIsShowing(true);
  const close = () => setIsShowing(false);

  return [isShowing, show, close];
}
