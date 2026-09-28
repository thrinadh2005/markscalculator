const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || 'BIP3cUVnS-KEqF_pw-Ff8LTWLz5LPAYcxVdJnVz9NBu4_fJ_nbHnlyyHYpWhL6F0YRGUqH8HUcvXlomKdmJlkS0';

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    publicKey: VAPID_PUBLIC_KEY
  });
};
