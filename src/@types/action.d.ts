interface Action {
  type: string;
  payload: Record<string, unknown>;
}
type Actions = Action[];
