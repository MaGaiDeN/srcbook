import type { CellType, SrcbookMetadataType } from '@srcbook/shared';

export type SessionType = {
  id: string;
  /**
   * Path to the directory containing the srcbook files.
   */
  dir: string;
  cells: CellType[];
  metadata: SrcbookMetadataType;
  /**
   * Replace this with updatedAt once we store srcbooks in sqlite
   */
  openedAt: number;
};
