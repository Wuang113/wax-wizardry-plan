import { createFileRoute, notFound } from '@tanstack/react-router';
import { chapters } from '@/lib/plan-content';
import { ChapterPage } from '@/components/plan/chapter-page';
export const Route = createFileRoute('/ke-hoach/$chapter')({
 loader: ({params}) => {const chapter = chapters.find(c => c.id === params.chapter); if (!chapter) throw notFound(); return {title:chapter.title,description:chapter.description};},
 head: ({loaderData}) => ({meta:[{title:loaderData ? `${loaderData.title} — Mộc` : 'Không tìm thấy kế hoạch — Mộc'},{name:'description',content:loaderData?.description ?? 'Nội dung kế hoạch không tồn tại.'},{property:'og:title',content:loaderData ? `${loaderData.title} — Mộc` : 'Không tìm thấy kế hoạch — Mộc'},{property:'og:description',content:loaderData?.description ?? 'Nội dung kế hoạch không tồn tại.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: ChapterRoute,
});
function ChapterRoute(){const {chapter} = Route.useParams(); return <ChapterPage id={chapter}/>;}
