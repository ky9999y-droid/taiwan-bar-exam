import { SUBJECTS_INFO } from '@/data/seedData';
import { SubjectId } from '@/types';
import { SubjectDetailClient } from '@/components/subjects/SubjectDetailClient';

export function generateStaticParams() {
  return SUBJECTS_INFO.map(s => ({
    subjectId: s.id,
  }));
}

export default function SubjectDetailPage({ params }: { params: { subjectId: string } }) {
  const subjectId = (params.subjectId as SubjectId) || 'ADMIN';
  return <SubjectDetailClient subjectId={subjectId} />;
}
