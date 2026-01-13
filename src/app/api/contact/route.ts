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
    
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      type: 'contact',
      date: new Date().toISOString(),
    };
    
    jsonData.contacts.push(newContact);
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    
    return NextResponse.json(newContact, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(dataDir, 'submissions.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    return NextResponse.json(jsonData.contacts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
