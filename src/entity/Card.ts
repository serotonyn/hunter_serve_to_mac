import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("cards")
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  css: string;

  @Column({ type: "text", nullable: true })
  title: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column("integer")
  datetime: number;

  @Column({ type: "text", nullable: true })
  type: string;

  @Column("integer")
  width: number;

  @Column("integer")
  height: number;

  @Column("integer")
  size: number;

  @Column("integer")
  views: number;

  @Column("text")
  link: string;

  @Column({ type: "text", nullable: true })
  vote: string;

  @Column({ type: "boolean", default: false })
  favorite: boolean;

  @Column({ type: "integer", nullable: true })
  comment_count: number;

  @Column({ type: "text", nullable: true })
  account_url: string;

  @Column({ type: "int", nullable: true })
  account_id: number;

  @Column({ type: "int", nullable: true })
  ups: number;

  @Column({ type: "int", nullable: true })
  downs: number;

  @Column({ type: "int", nullable: true })
  points: number;

  @Column({ type: "int", nullable: true })
  score: number;

  @Column({ type: "boolean", default: false })
  is_album: boolean;

  @Column({ type: "boolean", default: false })
  in_most_viral: boolean;
}
