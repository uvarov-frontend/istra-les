export default function notFound() {
  return (
    <main className="container mx-auto my-5 lg:my-10 flex min-h-[350px] flex-col justify-center">
      <h1 className="mb-6 text-center text-3xl font-bold">Ошибка 404</h1>
      <p className="text-center">
        Такой страницы не существует.
        <br />
        Проверьте написание адреса — может быть, вы просто ошиблись при наборе.
      </p>
    </main>
  );
}
