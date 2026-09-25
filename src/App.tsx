import { useState } from 'react'

const C = {
  brand:      '#00C853',
  brandDim:   '#00A846',
  brandGlow:  'rgba(0,200,83,0.22)',
  bg:         '#FFFFFF',
  surface:    '#F8FAF8',
  surface2:   '#F0F5F0',
  border:     '#E4EDE4',
  text:       '#1A2E1A',
  textSub:    '#6B8C72',
  textMuted:  '#A8C4AD',
  navBg:      '#1A2E1A',
  yellow:     '#F59E0B',
  mapBg:      '#EDF4EE',
}

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{
        width: 390, height: 844,
        borderRadius: 44, overflow: 'hidden',
        boxShadow: '0 0 0 1px #D0D8D0, 0 32px 80px rgba(0,0,0,0.15)',
        background: C.bg, flexShrink: 0, position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 120, height: 34, background: '#000', borderRadius: 20, zIndex: 50 }} />
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {children}
        </div>
      </div>
      <span style={{ fontSize: 12, fontWeight: 700, color: '#6B8C72', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  )
}

function StatusBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '52px 24px 8px', flexShrink: 0 }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill={C.text}><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4.5" y="2" width="3" height="10" rx="1"/><rect x="9" y="0" width="3" height="12" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.25"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill={C.text}><path d="M8 2.4C10.2 2.4 12.2 3.3 13.6 4.8L15.2 3.2C13.3 1.2 10.8 0 8 0C5.2 0 2.7 1.2 0.8 3.2L2.4 4.8C3.8 3.3 5.8 2.4 8 2.4Z" opacity="0.3"/><path d="M8 5.6C9.5 5.6 10.8 6.2 11.8 7.2L13.4 5.6C12 4.1 10.1 3.2 8 3.2C5.9 3.2 4 4.1 2.6 5.6L4.2 7.2C5.2 6.2 6.5 5.6 8 5.6Z"/><circle cx="8" cy="10" r="2"/></svg>
        <div style={{ width: 25, height: 12, border: `1.5px solid ${C.text}`, borderRadius: 3, padding: '1.5px', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '75%', height: '100%', background: C.brand, borderRadius: 1.5 }} />
        </div>
      </div>
    </div>
  )
}

function BottomNav({ active }: { active: string }) {
  const items = [
    { icon: '🚌', label: 'Início', id: 'home' },
    { icon: '⭐', label: 'Favoritos', id: 'fav' },
    { icon: '🔔', label: 'Alertas', id: 'notif' },
    { icon: '⚙️', label: 'Config', id: 'settings' },
    { icon: '👤', label: 'Perfil', id: 'profile' },
  ]
  return (
    <div style={{ background: C.navBg, display: 'flex', padding: '10px 0 20px', flexShrink: 0 }}>
      {items.map(item => (
        <div key={item.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer' }}>
          <span style={{ fontSize: 21 }}>{item.icon}</span>
          <span style={{ fontSize: 10, color: active === item.id ? C.brand : 'rgba(255,255,255,0.35)', fontWeight: active === item.id ? 700 : 400 }}>
            {item.label}
          </span>
          {active === item.id && <div style={{ width: 4, height: 4, borderRadius: '50%', background: C.brand }} />}
        </div>
      ))}
    </div>
  )
}

function Toggle({ on, toggle }: { on: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} style={{ width: 48, height: 26, borderRadius: 13, background: on ? C.brand : '#D0D8D0', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
      <div style={{ width: 20, height: 20, background: 'white', borderRadius: '50%', position: 'absolute', top: 3, left: on ? 25 : 3, transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
    </div>
  )
}

// ── TELA 1 – LOGIN ────────────────────────────────────────────
function LoginScreen() {
  return (
    <div style={{ background: C.bg, flex: 1, display: 'flex', flexDirection: 'column', padding: '0 32px' }}>
      <StatusBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 44 }}>
          <div style={{ width: 72, height: 72, background: C.brand, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, boxShadow: `0 8px 28px ${C.brandGlow}` }}>
            <span style={{ fontSize: 36 }}>🚌</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: C.text, letterSpacing: '-0.8px', margin: 0 }}>BusTracker</h1>
          <p style={{ fontSize: 14, color: C.textSub, margin: '6px 0 0' }}>Seu ônibus em tempo real</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[['E-mail', 'seu@email.com'], ['Senha', '••••••••']].map(([lbl, ph]) => (
            <div key={lbl}>
              <label style={{ fontSize: 11, fontWeight: 700, color: C.textSub, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{lbl}</label>
              <div style={{ background: '#F0F0F0', borderRadius: 14, padding: '16px 18px', border: `1.5px solid ${C.border}`, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 15, color: C.textMuted }}>{ph}</span>
                {lbl === 'Senha' && <span style={{ fontSize: 13, color: C.brand, fontWeight: 600 }}>Ver</span>}
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: 13, color: C.brand, fontWeight: 500 }}>Esqueceu a senha?</span>
          </div>
        </div>

        <button style={{ marginTop: 28, background: C.brand, color: 'white', border: 'none', borderRadius: 16, padding: '18px', fontSize: 16, fontWeight: 800, cursor: 'pointer', width: '100%', boxShadow: `0 8px 28px ${C.brandGlow}` }}>
          Entrar
        </button>

        <p style={{ textAlign: 'center', fontSize: 14, color: C.textSub, margin: '24px 0 0' }}>
          Não tem conta?{' '}
          <span style={{ color: C.brand, fontWeight: 700 }}>Cadastre-se</span>
        </p>
      </div>
      <div style={{ height: 34 }} />
    </div>
  )
}

// ── TELA 2 – HOME ─────────────────────────────────────────────
function HomeScreen() {
  return (
    <div style={{ background: C.bg, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '4px 20px 12px', flexShrink: 0 }}>
        <div style={{ background: C.surface, borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, border: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 16 }}>🔍</span>
          <span style={{ fontSize: 14, color: C.textMuted }}>Buscar linha ou destino...</span>
        </div>
      </div>

      <div style={{ flex: 1, background: C.mapBg, position: 'relative', overflow: 'hidden', minHeight: 0 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`h${i}`} style={{ position: 'absolute', left: 0, right: 0, top: `${i * 10}%`, height: 1, background: 'rgba(0,0,0,0.05)' }} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`v${i}`} style={{ position: 'absolute', top: 0, bottom: 0, left: `${i * 12.5}%`, width: 1, background: 'rgba(0,0,0,0.05)' }} />
        ))}
        <div style={{ position: 'absolute', left: 0, right: 0, top: '35%', height: 8, background: 'rgba(255,255,255,0.8)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, top: '65%', height: 6, background: 'rgba(255,255,255,0.6)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '30%', width: 8, background: 'rgba(255,255,255,0.8)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '65%', width: 6, background: 'rgba(255,255,255,0.6)' }} />
        <div style={{ position: 'absolute', top: '37%', left: '8%', right: '8%', height: 4, background: C.brand, borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={{ width: 56, height: 56, background: C.brand, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 12px ${C.brandGlow}, 0 4px 20px rgba(0,200,83,0.4)` }}>
            <span style={{ fontSize: 28 }}>🚌</span>
          </div>
        </div>
        {[[20, 37], [45, 37], [70, 37]].map(([l, t], i) => (
          <div key={i} style={{ position: 'absolute', left: `${l}%`, top: `${t}%`, transform: 'translate(-50%, -50%)', width: 10, height: 10, background: 'white', border: `2px solid ${C.brand}`, borderRadius: '50%' }} />
        ))}
        <div style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <span style={{ fontSize: 18 }}>📍</span>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: '24px 24px 0 0', padding: '20px 20px 0', boxShadow: '0 -4px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ width: 36, height: 4, background: C.border, borderRadius: 2, margin: '0 auto 16px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div>
            <p style={{ fontSize: 11, color: C.textSub, fontWeight: 600, margin: '0 0 2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Linha mais próxima</p>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: 0 }}>Linha 203 – Boqueirão</h2>
          </div>
          <div style={{ background: C.surface2, borderRadius: 10, padding: '6px 10px', border: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.brand }}>203</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <div style={{ width: 8, height: 8, background: C.brand, borderRadius: '50%' }} />
          <span style={{ fontSize: 14, color: C.brand, fontWeight: 600 }}>Chega em 5 minutos</span>
        </div>
        <button style={{ width: '100%', background: C.brand, color: 'white', border: 'none', borderRadius: 14, padding: '15px', fontSize: 15, fontWeight: 800, cursor: 'pointer', marginBottom: 16, boxShadow: `0 6px 20px ${C.brandGlow}` }}>
          Ver detalhes
        </button>
      </div>
      <BottomNav active="home" />
    </div>
  )
}

// ── TELA 3 – DETALHES ─────────────────────────────────────────
function DetailsScreen() {
  return (
    <div style={{ background: C.bg, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 20px', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: C.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 16 }}>←</span>
          </div>
          <h1 style={{ fontSize: 18, fontWeight: 800, color: C.text, margin: 0 }}>Linha 203 – Boqueirão</h1>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexShrink: 0 }}>
          <div style={{ background: 'rgba(0,200,83,0.1)', borderRadius: 8, padding: '6px 12px', border: '1px solid rgba(0,200,83,0.2)' }}>
            <span style={{ fontSize: 12, color: C.brand, fontWeight: 700 }}>● Em operação</span>
          </div>
          <div style={{ background: C.surface, borderRadius: 8, padding: '6px 12px', border: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 12, color: C.textSub, fontWeight: 600 }}>Lotação normal</span>
          </div>
        </div>

        <div style={{ background: C.surface, borderRadius: 16, padding: '16px', marginBottom: 12, border: `1px solid ${C.border}`, flexShrink: 0 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: C.textSub, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Próximos horários</p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['14:05', '14:25', '14:45'].map((t, i) => (
              <div key={t} style={{ flex: 1, background: i === 0 ? C.brand : 'white', borderRadius: 12, padding: '12px 8px', textAlign: 'center', border: i === 0 ? 'none' : `1.5px solid ${C.border}`, boxShadow: i === 0 ? `0 4px 16px ${C.brandGlow}` : 'none' }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: i === 0 ? 'white' : C.text }}>{t}</span>
                {i === 0 && <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', margin: '3px 0 0', fontWeight: 600 }}>Em 5 min</p>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#F0F5F0', borderRadius: 16, padding: '14px 16px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${C.border}`, flexShrink: 0 }}>
          <span style={{ fontSize: 28 }}>🌧️</span>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: C.text, margin: '0 0 2px' }}>18°C – Chuva</p>
            <p style={{ fontSize: 12, color: C.textSub, margin: 0 }}>Leve ao longo do trajeto</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexShrink: 0 }}>
          <button style={{ flex: 1, background: '#FFF8E7', color: '#B45309', border: '1px solid #FCD34D', borderRadius: 14, padding: '14px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
            ⭐ Favoritar
          </button>
          <button style={{ flex: 1, background: C.brand, color: 'white', border: 'none', borderRadius: 14, padding: '14px', fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: `0 4px 16px ${C.brandGlow}` }}>
            🔔 Ativar alerta
          </button>
        </div>

        <div style={{ flex: 1, background: C.mapBg, borderRadius: 16, position: 'relative', overflow: 'hidden', minHeight: 80, border: `1px solid ${C.border}` }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: '45%', height: 4, background: C.brand, opacity: 0.7 }} />
          {[[15, 45], [40, 45], [65, 45], [85, 45]].map(([l, t], i) => (
            <div key={i} style={{ position: 'absolute', left: `${l}%`, top: `${t}%`, transform: 'translate(-50%, -50%)', width: 10, height: 10, background: 'white', border: `2px solid ${C.brand}`, borderRadius: '50%' }} />
          ))}
          <p style={{ position: 'absolute', bottom: 10, left: 14, fontSize: 11, color: C.textSub, fontWeight: 500, margin: 0 }}>Trajeto completo</p>
        </div>
      </div>
      <div style={{ height: 34 }} />
    </div>
  )
}

// ── TELA 4 – NOTIFICAÇÕES ─────────────────────────────────────
function NotifCard({ icon, title, time, sub, accent }: { icon: string; title: string; time: string; sub: string; accent: string }) {
  return (
    <div style={{ background: 'white', borderRadius: 16, padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'flex-start', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: `1px solid ${C.border}` }}>
      <div style={{ width: 42, height: 42, borderRadius: 12, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{title}</span>
          <span style={{ fontSize: 11, color: C.textMuted }}>{time}</span>
        </div>
        <span style={{ fontSize: 13, color: C.textSub }}>{sub}</span>
      </div>
    </div>
  )
}

function NotificationsScreen() {
  const [sound, setSound] = useState(true)
  return (
    <div style={{ background: C.surface, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 20px', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '0 0 4px', letterSpacing: '-0.4px' }}>Notificações</h1>
        <p style={{ fontSize: 13, color: C.textSub, margin: '0 0 20px' }}>3 novas hoje</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          <NotifCard icon="🚌" title="Ônibus chega em 5 min" time="Agora" sub="Linha 203 – Boqueirão" accent="rgba(0,200,83,0.1)" />
          <NotifCard icon="🌧️" title="Chuva no trajeto" time="14:02" sub="Temperatura: 18°C · Chuva leve" accent="#EFF6FF" />
          <NotifCard icon="✅" title="Viagem concluída" time="13:45" sub="Linha 203 · Duração: 22 min" accent="rgba(0,200,83,0.08)" />
        </div>

        <div style={{ background: 'white', borderRadius: 16, padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${C.border}` }}>
          <div>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.text, margin: '0 0 2px' }}>Ativar som</p>
            <p style={{ fontSize: 12, color: C.textSub, margin: 0 }}>Toque ao receber alertas</p>
          </div>
          <Toggle on={sound} toggle={() => setSound(s => !s)} />
        </div>
      </div>
      <BottomNav active="notif" />
    </div>
  )
}

// ── TELA 5 – CONFIGURAÇÕES ────────────────────────────────────
function SettingsScreen() {
  const [voice, setVoice] = useState(false)
  const [contrast, setContrast] = useState(true)

  return (
    <div style={{ background: C.surface, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 20px', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: '0 0 20px', letterSpacing: '-0.4px' }}>Configurações</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ background: 'white', borderRadius: 16, padding: '16px', border: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: C.text, margin: 0 }}>Tamanho da fonte</p>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.brand }}>Médio</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 12, color: C.textSub, fontWeight: 700 }}>A</span>
              <div style={{ flex: 1, height: 6, borderRadius: 3, background: '#E4EDE4', position: 'relative' }}>
                <div style={{ width: '60%', height: '100%', background: C.brand, borderRadius: 3 }} />
                <div style={{ width: 20, height: 20, background: 'white', border: `2px solid ${C.brand}`, borderRadius: '50%', position: 'absolute', top: -7, left: '60%', transform: 'translateX(-50%)', boxShadow: `0 2px 8px ${C.brandGlow}` }} />
              </div>
              <span style={{ fontSize: 16, color: C.textSub, fontWeight: 700 }}>A</span>
            </div>
          </div>

          {[
            { label: 'Modo voz', sub: 'Leitura em voz alta', val: voice, set: () => setVoice(v => !v) },
            { label: 'Alto contraste', sub: 'Melhor visibilidade', val: contrast, set: () => setContrast(c => !c) },
          ].map(item => (
            <div key={item.label} style={{ background: 'white', borderRadius: 16, padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${C.border}` }}>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: C.text, margin: '0 0 2px' }}>{item.label}</p>
                <p style={{ fontSize: 12, color: C.textSub, margin: 0 }}>{item.sub}</p>
              </div>
              <Toggle on={item.val} toggle={item.set} />
            </div>
          ))}

          <div style={{ background: 'white', borderRadius: 16, padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${C.border}` }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: C.text, margin: '0 0 2px' }}>Idioma</p>
              <p style={{ fontSize: 12, color: C.textSub, margin: 0 }}>Português (Brasil)</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: C.surface2, borderRadius: 8, padding: '6px 10px', border: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>PT-BR</span>
              <span style={{ fontSize: 11, color: C.textSub }}>▾</span>
            </div>
          </div>
        </div>

        <button style={{ marginTop: 20, background: C.brand, color: 'white', border: 'none', borderRadius: 16, padding: '16px', fontSize: 16, fontWeight: 800, cursor: 'pointer', width: '100%', boxShadow: `0 8px 24px ${C.brandGlow}` }}>
          Salvar
        </button>
      </div>
      <BottomNav active="settings" />
    </div>
  )
}

// ── TELA 6 – HISTÓRICO ────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ fontSize: 15, color: i < count ? C.yellow : '#D0D8D0' }}>★</span>
      ))}
    </div>
  )
}

function HistoryScreen() {
  const trips = [
    { date: '24/09', line: 'Linha 203 – Boqueirão', stars: 5, time: '14:05', duration: '22 min' },
    { date: '23/09', line: 'Linha 203 – Boqueirão', stars: 4, time: '08:30', duration: '25 min' },
    { date: '22/09', line: 'Linha 203 – Boqueirão', stars: 5, time: '17:45', duration: '20 min' },
  ]

  return (
    <div style={{ background: C.surface, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 20px', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: 0, letterSpacing: '-0.4px' }}>Histórico</h1>
          <span style={{ fontSize: 13, color: C.brand, fontWeight: 700 }}>Ver tudo</span>
        </div>

        <div style={{ background: C.brand, borderRadius: 16, padding: '16px', marginBottom: 18, display: 'flex', justifyContent: 'space-around' }}>
          {[['3', 'Viagens'], ['22min', 'Média'], ['4.7 ★', 'Avaliação']].map(([val, lbl]) => (
            <div key={lbl} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 20, fontWeight: 800, color: 'white', margin: '0 0 2px' }}>{val}</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', margin: 0, fontWeight: 500 }}>{lbl}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {trips.map((trip, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 16, padding: '14px 16px', border: `1px solid ${C.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.textSub }}>{trip.date}</span>
                    <span style={{ fontSize: 11, color: C.textMuted }}>·</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: C.textSub }}>{trip.time}</span>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: 0 }}>{trip.line}</p>
                </div>
                <div style={{ background: C.surface2, borderRadius: 8, padding: '4px 8px', border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.brand }}>{trip.duration}</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stars count={trip.stars} />
                <span style={{ fontSize: 12, color: C.textMuted }}>Avaliar novamente</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="profile" />
    </div>
  )
}

// ── ROOT ──────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F0F5F1 0%, #E8F0EA 100%)', padding: '48px 32px', overflow: 'auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'white', borderRadius: 16, padding: '12px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: 14 }}>
          <span style={{ fontSize: 24 }}>🚌</span>
          <span style={{ fontSize: 22, fontWeight: 800, color: C.text, letterSpacing: '-0.3px' }}>BusTracker</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.brand, background: 'rgba(0,200,83,0.1)', borderRadius: 6, padding: '3px 8px', border: '1px solid rgba(0,200,83,0.2)' }}>Versão Protótipo</span>
        </div>
        <p style={{ fontSize: 14, color: C.textSub, margin: 0 }}>6 telas · iPhone 14 · Tempo real</p>
      </div>

      <div style={{ display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <PhoneFrame label="01 · Login"><LoginScreen /></PhoneFrame>
        <PhoneFrame label="02 · Home"><HomeScreen /></PhoneFrame>
        <PhoneFrame label="03 · Detalhes"><DetailsScreen /></PhoneFrame>
        <PhoneFrame label="04 · Notificações"><NotificationsScreen /></PhoneFrame>
        <PhoneFrame label="05 · Configurações"><SettingsScreen /></PhoneFrame>
        <PhoneFrame label="06 · Histórico"><HistoryScreen /></PhoneFrame>
      </div>
    </div>
  )
}
