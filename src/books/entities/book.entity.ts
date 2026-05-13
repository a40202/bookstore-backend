@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column('int')
  price: number;

  @Column('int', { nullable: true })
  originalPrice: number;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column('decimal', { precision: 3, scale: 1, default: 0 })
  rating: number;

  @Column({ default: 0 })
  reviewCount: number;

  @Column('text')
  description: string;

  @Column({ default: 0 })
  stock: number;

  @Column({ nullable: true })
  publisher: string;

  @Column({ nullable: true })
  publishYear: number;

  @Column({ nullable: true })
  pages: number;

  @Column({ nullable: true })
  isbn: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}