import { Truck } from 'lucide-react';

export default function FreeShippingBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-red-600">
        <Truck className="w-5 h-5 flex-shrink-0" />
        <p className="text-base sm:text-lg font-bold text-center">
          Últimos kits com frete grátis
        </p>
      </div>
    </div>
  );
}
