import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const filePath = path.join(dataDir, 'submissions.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    
    const newConsultation = {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      type: 'consultation',
      date: new Date().toISOString(),
    };
    
    jsonData.consultations.push(newConsultation);
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    
    return NextResponse.json(newConsultation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit consultation request' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(dataDir, 'submissions.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    return NextResponse.json(jsonData.consultations);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch consultations' }, { status: 500 });
  }
}
