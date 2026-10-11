
import { supabase } from "./lib/supabase";
import type { Session } from "./data";

export async function getSessions(): Promise<Session[]> {
  const { data, error } = await supabase
    .from("class_sessions")
    .select("*")
    .order("day_of_week", { ascending: true });

  if (error) {
    console.error("Supabase fetch error:", error.message);
    throw error;
  }

  return (data ?? []).map((row): Session => ({
    id: String(row.id),
    course: row.course ?? row.course_name ?? "",
    division: row.division ?? row.division_name ?? "",
    day: row.day ?? row.day_of_week ?? "",
    start: String(row.start ?? row.start_time_text ?? row.start_time ?? "").slice(0, 5),
    end: String(row.end ?? row.end_time_text ?? row.end_time ?? "").slice(0, 5),
    subject: row.subject ?? "",
    teacher: row.teacher ?? row.faculty_name ?? "",
    room: row.room ?? row.room_name ?? "",
    kind: row.kind ?? row.session_type ?? "Theory"
  }));
}
