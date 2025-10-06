export interface Clip {
  id: string;
  name: string;
  type: 'video' | 'audio';
  file?: File;
  size?: number;
  duration?: number;
}