# MV Personal Trainer — Landing Page

Projeto em Next.js pronto para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Acesse https://vercel.com/new
3. Importe o repositório.
4. Clique em Deploy.

## Pontos para editar antes de publicar

No arquivo `app/page.tsx`:

- Troque `WHATSAPP_URL` pelo número correto.
- Troque os `checkout: "#"` pelos links de compra da MFIT.
- Substitua os placeholders de fotos por imagens reais autorizadas.
- Atualize depoimentos e resultados somente com dados verdadeiros.
- Revise e-mail, CREF e preços.

## Estrutura

- `app/page.tsx`: conteúdo da página
- `app/globals.css`: design e responsividade
- `app/layout.tsx`: metadados básicos de SEO