import { v4 as uuidv4 } from 'uuid';

export const RANDOM_ACTION_TYPE = `@@rand/action/${uuidv4()}`;

export const randomAction = () => ({
  type: RANDOM_ACTION_TYPE
});
