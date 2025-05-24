
// the infos page with everything you need to known on this app
const Infos = () => {
  return (
    <main className="text-jet max-w-4xl mx-auto px-6 py-10 text-base leading-relaxed dark:text-gray-100 sans-font">
      <h1 className="text-jet text-3xl font-bold mb-6">ℹ️ Code Wallet — Information Page</h1>

      <section className="text-jet mb-8">
        <h2 className="text-jet text-2xl font-semibold mb-2">🧩 Features</h2>
        <ul className="text-jet list-disc list-inside space-y-2">
          <li><strong>Create, Edit, and Delete Snippets:</strong> Manage your snippets with a title, code block, and tags.</li>
          <li><strong>Tag Management:</strong> Create, rename, and delete tags to organize your snippets.</li>
          <li><strong>Copy to Clipboard:</strong> Quickly copy any snippet code to your clipboard.</li>
          <li><strong>Syntax Highlighting:</strong> Shiki is used to detect and display code with proper syntax color based on language (JS, TS, HTML, CSS, Python...).</li>
        </ul>
      </section>

      <section className="text-jet mb-8">
        <h2 className="text-jet text-2xl font-semibold mb-2">👨‍💻 Developer Information</h2>
        <ul className="text-jet list-disc list-inside space-y-1">
          <li><strong>Developer:</strong> Roi-David MUNKATU-MENGA</li>
          <li><strong>GitHub:</strong> https://github.com/RDmoonk/code-wallet-everyday-dev.git</li>
          <li><strong>Built with:</strong> Electron, React, Vite, TailwindCSS, Shiki</li>
        </ul>
      </section>

      <section className="text-jet mb-8">
        <h2 className="text-jet text-2xl font-semibold mb-2">🔐 Legal Notice & Data Handling</h2>
        <ul className="text-jet list-disc list-inside space-y-1">
          <li>All data is stored <strong>locally</strong> on your machine — no external servers involved.</li>
          <li>Your code and tags remain <strong>private</strong> and are not shared or uploaded.</li>
          <li>The app collects <strong>no personal information</strong>.</li>
        </ul>
      </section>
    </main>
  );
};

export default Infos;
