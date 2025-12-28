
export enum QueueStatus {
  UNASSIGNED = 'UNASSIGNED', // Baru daftar (Walk-in)
  BOOKED = 'BOOKED',         // Daftar untuk besok/nanti
  WAITING = 'WAITING',       // Sudah di lokasi / Check-in Security
  CALLED = 'CALLED',         // Dipanggil Admin
  LOADING = 'LOADING',       // Sedang di Dock
  COMPLETED = 'COMPLETED',   // Selesai Loading (Tunggu keluar)
  EXITED = 'EXITED',         // Sudah keluar gerbang (Security Out)
  CANCELLED = 'CANCELLED'
}

export enum Gate {
  NONE = 'NONE',
  GATE_2 = 'GATE_2',
  GATE_4 = 'GATE_4'
}

export enum Priority {
  NORMAL = 'NORMAL',
  URGENT = 'URGENT'
}

export enum EntryType {
  WALK_IN = 'WALK_IN',
  BOOKING = 'BOOKING'
}

export interface DriverData {
  id: string;
  name: string;
  licensePlate: string;
  company: string; // Entity (SBI, SDI, etc)
  pic?: string;    // Person In Charge
  phone: string;
  purpose: 'LOADING' | 'UNLOADING';
  doNumber: string; // Formatted PO Number
  documentFile?: string; // Name of the uploaded file (Surat Jalan)
  itemType?: string;
  notes?: string;
  entryType: EntryType;
  
  // Timestamps
  checkInTime: number; // Waktu daftar
  securityInTime?: number; // Waktu masuk gerbang
  assignmentTime?: number;
  startTime?: number;
  endTime?: number;
  securityOutTime?: number; // Waktu keluar gerbang

  status: QueueStatus;
  gate: Gate;
  queueNumber?: string; // e.g., A1, B2
  priority: Priority;
}

export interface Stats {
  totalCheckIn: number;
  waiting: number;
  loading: number;
  completed: number;
  avgDwellTime: number; // in minutes
}

export interface HourlyData {
  hour: string;
  count: number;
}
