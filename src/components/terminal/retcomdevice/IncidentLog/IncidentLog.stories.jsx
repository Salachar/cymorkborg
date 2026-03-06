import IncidentLog from './IncidentLog';

export default {
  title: 'Terminal/IncidentLog',
  component: IncidentLog,
};

export const BlankProps = () => (
  <IncidentLog />
);

// Security incidents at a club
export const ClubSecurity = () => (
  <IncidentLog
    title="INCIDENT LOG"
    timeframe="Last 7 days"
    incidents={[
      {
        timestamp: "3 DAYS AGO (22:45)",
        type: "Questioning",
        details: {
          "Individual brought in": '"Charlie Sand"',
          "Reason": "Asking questions about Lucky Flight Casino operations",
          "Duration": "2 hours (holding room)",
          "Resolution": "Information provided, released",
          "Status": "No further action required",
        }
      },
      {
        timestamp: "5 DAYS AGO (23:15)",
        type: "Territorial intrusion",
        details: {
          "Details": "Virid Vipers scout spotted outside entrance",
          "Response": "Stone Eels mobilized (3 members)",
          "Resolution": "Subject fled before engagement",
          "Follow-up": "Increased perimeter patrols initiated",
        }
      },
      {
        timestamp: "6 DAYS AGO (01:30)",
        type: "Patron disturbance",
        details: {
          "Details": "Intoxicated patrons fighting on main floor",
          "Response": "Bouncers intervened (non-lethal)",
          "Resolution": "Both parties ejected to street",
          "Injuries": "Minor (bruises, no medical treatment required)",
        }
      },
    ]}
  />
);

// Corporate security log with fatal incident
export const CorporateSecurity = () => (
  <IncidentLog
    title="SECURITY LOG"
    timeframe="Last 24 hours"
    incidents={[
      {
        timestamp: "TODAY (14:30)",
        type: "Fatal incident - Critical",
        details: {
          "Location": "Server Room B",
          "Victim": "Employee #4521",
          "Cause": "Electrical malfunction",
          "Status": "Under investigation",
          "Authorities notified": "No",
        }
      },
      {
        timestamp: "TODAY (08:15)",
        type: "Warning - Unauthorized access attempt",
        details: {
          "Location": "Executive Floor",
          "Method": "Cloned keycard",
          "Response": "Access denied, security alerted",
          "Suspect": "Unknown (footage being reviewed)",
        }
      },
    ]}
  />
);

// Empty log
export const EmptyLog = () => (
  <IncidentLog
    title="INCIDENT LOG"
    timeframe="Last 30 days"
    incidents={[]}
  />
);
