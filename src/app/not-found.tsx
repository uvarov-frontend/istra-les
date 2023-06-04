export default function notFound() {
  return (
    <main className="container mx-auto my-10 min-h-[350px] flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Ошибка 404</h1>
      <p className="text-center">Такой страницы не существует.<br />Проверьте написание адреса — может быть, вы просто ошиблись при наборе.</p>
    </main>
  );
}
