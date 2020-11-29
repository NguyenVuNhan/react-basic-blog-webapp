import { useEffect, useState } from "react";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const useObservable = <T1, T2 = undefined>(
  o: Observable<T1>,
  selector: (val: T1) => T2 extends undefined ? T1 : T2
): (T2 extends undefined ? T1 : T2) | undefined => {
  const [value, setValue] = useState<T2 extends undefined ? T1 : T2>();

  useEffect(() => {
    const s = o.pipe(map(selector)).subscribe(setValue);
    return () => {
      s.unsubscribe();
    };
  }, [o]);

  return value;
};

export default useObservable;
