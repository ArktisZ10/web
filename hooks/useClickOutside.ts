import { MutableRefObject, ReactElement, useEffect } from "https://esm.sh/v128/@types/react@18.2.38/index.d.ts";

/**
 * https://stackoverflow.com/questions/63359138/react-closing-a-dropdown-when-click-outside
 */
function useClickOutside(ref: MutableRefObject<HTMLElement>, onClickOutside: (event: MouseEvent) => void) {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
          onClickOutside(event);
        }
      }
      // Bind
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // dispose
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }