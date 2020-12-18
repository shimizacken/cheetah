import { EventType } from "./event.types";

export type LogLevel = "info" | "error" | "warning";

export const log = (
  eventType: EventType,
  message?: any,
  level: LogLevel = "info"
) => {
  if (level === "error") {
    console.error(`🚀 ~ ${eventType} ~ ${message}`);
  }

  if (level === "warning") {
    console.warn(`🚀 ~ ${eventType} ~ ${message}`);
  }

  if (level === "info") {
    console.log(`🚀 ~ ${eventType} ~ ${message}`);
  }
};
