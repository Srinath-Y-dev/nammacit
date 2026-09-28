import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const roleData = {
  student: {
    name: 'Arjun Sharma',
    initials: 'AS',
    role: 'student',
    email: 'arjun.sharma@nammacit.edu.in',
    phone: '+91 98765 43210',
    profilePic: null,
    campusId: 'CAMP21CS045',
    status: 'active',
    // Student specific
    rollNumber: '21CS045',
    department: 'Computer Science Engineering',
    year: '3rd Year',
    section: 'CSE-A',
  },
  faculty: {
    name: 'Dr. Priya Nair',
    initials: 'PN',
    role: 'faculty',
    email: 'priya.nair@nammacit.edu.in',
    phone: '+91 99887 76655',
    profilePic: null,
    campusId: 'CAMP-FAC-042',
    status: 'active',
    // Faculty specific
    employeeId: 'EMP-IT-042',
    designation: 'Associate Professor',
    department: 'Information Technology',
  },
  clubhead: {
    name: 'Vikram Singh',
    initials: 'VS',
    role: 'clubhead',
    email: 'vikram.singh@nammacit.edu.in',
    phone: '+91 91234 56780',
    profilePic: null,
    campusId: 'CAMP22CS090',
    status: 'active',
    // Student/Clubhead specific
    rollNumber: '22CS090',
    department: 'Computer Science Engineering',
    year: '2nd Year',
    section: 'CSE-B',
    clubName: 'AI Research Club',
    clubRole: 'President',
    facultyCoordinator: 'Dr. Priya Nair',
  },
  admin: {
    name: 'System Admin',
    initials: 'SA',
    role: 'admin',
    email: 'admin@nammacit.edu.in',
    phone: '+91 80000 00000',
    profilePic: null,
    campusId: 'CAMP-ADM-001',
    status: 'active',
    // Admin specific
    adminId: 'ADM-001',
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role) => {
    if (roleData[role]) {
      setUser(roleData[role]);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
