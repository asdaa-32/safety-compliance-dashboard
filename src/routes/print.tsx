import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/print')({
  component: PrintPage,
});

function PrintPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white p-8 text-gray-800 font-sans">
      <header className="mb-8 border-b pb-4 text-right">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">صفحة الطباعة</h1>
        <p className="text-gray-500">يمكنك مراجعة المحتوى أدناه ثم الضغط على زر الطباعة.</p>
      </header>
      <main className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-right">
          <h2 className="text-xl font-semibold mb-2">تفاصيل المحتوى</h2>
          <p className="text-gray-700 leading-relaxed">
            هذا النص هو مثال للمحتوى الذي سيتم طباعته. عند النقر على زر الطباعة، 
            سيقوم المتصفح بفتح نافذة الطباعة الخاصة به.
          </p>
        </div>
        <div className="flex justify-start print:hidden">
          <button 
            onClick={() => window.print()}
            className="rounded-md bg-blue-600 px-6 py-2.5 text-white font-medium hover:bg-blue-700"
          >
            اطبع الصفحة الآن
          </button>
        </div>
      </main>
    </div>
  );
}
