// Cross-carousel "only one video plays at a time" coordinator. A module-level
// singleton (rather than React context) so ShowreelPlayer instances nested in
// separate VideoCarousel trees can all subscribe without prop-drilling.
type Listener = (activeId: string | null) => void;

let activeId: string | null = null;
const listeners = new Set<Listener>();

export function setActivePlayer(id: string | null) {
  activeId = id;
  listeners.forEach((listener) => listener(activeId));
}

export function subscribeActivePlayer(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getActivePlayer(): string | null {
  return activeId;
}

export function clearActivePlayerIfSelf(id: string) {
  if (activeId === id) setActivePlayer(null);
}
