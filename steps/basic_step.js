const { I } = inject()

When('I scroll vertically', (table) => {
  const tableByHeader = table.parse().hashes()

  for (const row of tableByHeader) {
    const X = +row.X;
    const Y_Source = +row.Y_Source;
    const Y_Target = +row.Y_Target;

    I.touchPerform([
      {
        action: 'longPress',
        options: { x: X, y: Y_Source }
      },
      {
        action: 'moveTo',
        options: { x: X, y: Y_Target }
      },
      { action: 'release' }
    ])
  }
})