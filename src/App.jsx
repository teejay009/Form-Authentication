const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public Routes */}

        <Route path="login" element={<Login />} />
        <Route path="/linkpage" element={<LinkPage />} />
        <Route path="/Unauthorized" element={<Unauthorized />} />

        {/* private Routes */}
        <Route element={<PersistLogin/>}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Editor, ROLES.Admin]}/>}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]}/>}>
                <Route path="editor" element={<Editor />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
                <Route path="admin" element={<Admin />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]}/>}>
                <Route path="lounge" element={<Lounge />} />
            </Route>
        </Route>
        
        
        {/* to catch all error */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;