import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sampletable') 
export class sampletable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 225 }) 
  client_name: string;

  @Column({ type: 'varchar', length: 225 }) 
  category_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ref_campaign_id: string;

  @Column({ type: 'varchar', length: 30 }) 
  delivery_pace: string;

  @Column({ type: 'boolean' }) 
  queued: boolean;

  @Column({ type: 'int' }) 
  clicks_ordered: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 5 }) 
  click_variance: number;

  @Column({ type: 'decimal', precision: 10, scale: 5 }) 
  views_variance: number;

  @Column({ type: 'decimal', precision: 6, scale: 4 }) 
  clicks_percentage: number;

  @Column({ type: 'decimal', precision: 6, scale: 4 }) 
  views_percentage: number;

  @Column({ type: 'decimal', precision: 6, scale: 4 }) 
  c_co_percentage: number;

  @Column({ type: 'decimal', precision: 7, scale: 4 }) 
  ctvr: number;

  @Column({ type: 'int' }) 
  enhance_delay_minutes: number;

  @Column({ type: 'int' }) 
  desktop_clicks: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 }) 
  desktop_clicks_percentage: number;

  @Column({ type: 'int' }) 
  mobile_clicks: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 }) 
  mobile_clicks_percentage: number;

  @Column({ type: 'smallint' }) 
  enhanced_clicks: number;

  @Column({ type: 'smallint' }) 
  enhanced_views: number;

  @Column({ type: 'decimal', precision: 6, scale: 4 }) 
  enhanced_target_views_rate: number;

  @Column({ type: 'decimal', precision: 6, scale: 4 }) 
  enhanced_view_percentage: number;

  @Column({ type: 'decimal', precision: 10, scale: 4 }) 
  estimated_final_c_v_percentage: number;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  has_open_pixel: number;

  @Column({ type: 'smallint' }) 
  cms: number;

  @Column({ type: 'decimal', precision: 17, scale: 15, nullable: true }) 
  v_ev: number;

  @Column({ type: 'smallint' }) 
  total_clicks: number;

  @Column({ type: 'smallint' }) 
  total_views: number;

  @Column({ type: 'timestamp' })
  start_date_time: Date;

  @Column({ type: 'timestamp' })
  broadcast_date: Date;

  @Column({ type: 'timestamp' })
  created_at: Date;
}
