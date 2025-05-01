# 3WB MiniPay Fleet App

A decentralized client application built on Next.js 15 that enables investors to participate in fractional and full ownership of lease-to-own(work & pay) three-wheeler fleets & earn a decent ROI on the Celo blockchain using the Celo MiniPay wallet.

## 🚀 Features

- **Landing Page**
  - Welcome screen highlighting High Returns, Secure Investment, and Passive Income.
  - Connect your wallet and navigate to the fleet dashboard.
- **Wallet Integration**
  - Seamless Celo MiniPay wallet connection using WAGMI and VIEM.
- **Fleet Dashboard**
  - View your owned fleet IDs in a responsive carousel.
  - See real-time fleet count, status, and ownership breakdown (fractioned vs full).
- **Buy Fleet**
  - Initiate fractional or full 3-wheeler purchases directly from the app.
- **Detailed Fleet Cards**
  - Inspect fleet metadata: ID, status, fraction shares, and total fractions.
- **History Drawer (WIP)**
  - Access your transaction and investment history via a side drawer.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5, React 19
- **UI & UX**: Tailwind CSS, Radix UI, Shadcn UI, Embla Carousel, Framer Motion, Lucide Icons
- **Blockchain**: Celo Mainnet, WAGMI, VIEM
- **Configuration**: Alchemy RPC

## 📦 Getting Started

### Prerequisites

- Node.js v18 or newer
- npm or yarn
- An Alchemy RPC URL for Celo
- Celo MiniPay wallet with testnet/mainnet funds

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/3-Wheeler-Bike-Club/3-wheeler-bike-club-minipay-fleet-app.git
   cd 3-wheeler-bike-club-minipay-fleet-app


2. **Install dependencies**

   ```bash
   npm install
   # or yarn
   ```

3. **Configure environment**

   Create a `.env.local` in the project root:

   ```env
   ALCHEMY_RPC_URL=YOUR_ALCHEMY_CELO_RPC_URL
   ```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

- **RPC URL**: Set `ALCHEMY_RPC_URL` in `.env.local` to point to your Alchemy Celo endpoint.
- **Old Contract Address**: The fleet-orderbook contract is deployed at: `0x8302a25627f48E27d3b408959aEFDbCe9D0CE183` (Celo Mainnet)
- **Contract Address**: The fleet-orderbook contract is deployed at: `0x630d9E7Dda453EDa0676bd24CEB1b7f22576b58D` (Celo Mainnet)


## 📁 Directory Structure

```
/
├── app/                  # Next.js App Router pages (landing + fleet)
├── components/           # UI components (landing, fleet, UI primitives)
├── utils/                # ABI definitions, contract addresses, and config
├── public/               # Static assets (images, icons)
├── environment.d.ts      # Environment variable types
├── next.config.ts        # Next.js configuration
├── package.json          # Project manifest
└── tsconfig.json         # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow:

1. Fork the repository
2. Create a branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to your branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

```
```
