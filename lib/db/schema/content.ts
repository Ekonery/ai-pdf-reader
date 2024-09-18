import { nanoid } from '@/lib/utils';
import { index, pgTable, text, varchar, vector,serial } from 'drizzle-orm/pg-core';
import { resources } from './resources';

export const content = pgTable('content',{
    id: serial('id').primaryKey(),
    name: text('name'),
    
})