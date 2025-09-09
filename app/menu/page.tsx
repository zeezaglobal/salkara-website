export default function Menu() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#2b1a12] to-[#1a0f0a] py-10 px-4 text-white">
        <div className="max-w-4xl mx-auto bg-[#2c1b13]/90 shadow-xl rounded-2xl p-8 border border-orange-600">
          <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
            Our Menu
          </h1>
  
          {/* Lunch Specials */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4 border-b border-orange-700 pb-2">
              Lunch Specials (from 12:00 PM)
            </h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Half Chicken Biriyani</span> <span className="text-orange-300">$12.99</span>
              </li>
              <li className="flex justify-between">
                <span>Full Chicken Biriyani</span> <span className="text-orange-300">$15.99</span>
              </li>
              <li className="flex justify-between">
                <span>Vizhinjam Chicken Fry</span> <span className="text-orange-300">$12.99</span>
              </li>
            </ul>
          </section>
  
          {/* Evening Combos */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4 border-b border-orange-700 pb-2">
              Evening Combos (from 4:00 PM)
            </h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>2 Parottas + Chicken Kuruma</span> <span className="text-orange-300">$13.99</span>
              </li>
              <li className="flex justify-between">
                <span>2 Parottas + Chicken Kondattam</span> <span className="text-orange-300">$14.99</span>
              </li>
              <li className="flex justify-between">
                <span>2 Parottas + Beef Fry</span> <span className="text-orange-300">$16.99</span>
              </li>
              <li className="flex justify-between">
                <span>2 Parottas + Beef Roast</span> <span className="text-orange-300">$15.99</span>
              </li>
              <li className="flex justify-between">
                <span>3 Dosa + Sambar + Chutney + Omlette</span> <span className="text-orange-300">$15.99</span>
              </li>
            </ul>
          </section>
  
          {/* Salkara Specials */}
          <section>
            <h2 className="text-2xl font-semibold text-orange-400 mb-4 border-b border-orange-700 pb-2">
              Salkara Specials
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex justify-between"><span>Kappa Biriyani</span> <span className="text-orange-300">$14.99</span></li>
              <li className="flex justify-between"><span>Kerala Parottas</span> <span className="text-orange-300">$2.49</span></li>
              <li className="flex justify-between"><span>Chicken Kuruma</span> <span className="text-orange-300">$11.99</span></li>
              <li className="flex justify-between"><span>Chicken Kondattam</span> <span className="text-orange-300">$13.99</span></li>
              <li className="flex justify-between"><span>Vizhinjam Chicken Fry</span> <span className="text-orange-300">$12.99</span></li>
              <li className="flex justify-between"><span>Beef Fry</span> <span className="text-orange-300">$15.99</span></li>
              <li className="flex justify-between"><span>Beef Roast</span> <span className="text-orange-300">$14.99</span></li>
              <li className="flex justify-between"><span>Pomfret / Avoli Fry</span> <span className="text-orange-300">$12.99</span></li>
              <li className="flex justify-between"><span>2 Chicken Cutlets</span> <span className="text-orange-300">$5.00</span></li>
              <li className="flex justify-between"><span>2 Beef Cutlets</span> <span className="text-orange-300">$6.00</span></li>
              <li className="flex justify-between"><span>2 Pazham Pori</span> <span className="text-orange-300">$5.00</span></li>
            </ul>
          </section>
  
          {/* Footer */}
          <footer className="mt-10 text-center text-sm text-gray-300 border-t border-orange-700 pt-4">
            <p>📍 499 Notredame Avenue, Together with Namasthey</p>
            <p>📞 +1-249-979-2340</p>
            <p className="mt-2 italic text-orange-400">Flavour that sings, joy that brings</p>
          </footer>
        </div>
      </main>
    );
  }
  