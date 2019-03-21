<%@ Page Title="Login" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="Login.aspx.vb" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">



    <!-- Service Section -->
    <section id="services" class="padding50">
        <div class="container">
            <div class="row">
                <h2 class="background double animated wow fadeInUp" data-wow-delay="0.2s"><span><strong>L</strong>ogin</span></h2>
            </div>
            <!-- ./ end row -->
            <div class="row">
               
               
               
               
                     
                   <table class="style2">
                        <tr>
                            <td class="text-left">
                                <asp:Label ID="Label1" runat="server" Text="Registration ID"></asp:Label>
                            </td>
                            <td class="style1">
                                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" 
                                    ErrorMessage="Registration ID is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-left">
                                <asp:Label ID="Label2" runat="server" Text="Password"></asp:Label>
                            </td>
                            <td class="style1">
                                <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="TextBox2" 
                                    ErrorMessage="Password Number is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                            </td>
                        </tr>
                        <tr>
                            <td class="style3">
                                &nbsp;</td>
                            <td class="style1">
                                <asp:Button ID="Button1" runat="server" Text="LOGIN" />

                                <asp:HyperLink ID="HyperLink1" href="Registration.aspx" runat="server">Registration</asp:HyperLink>
                            
                                <asp:HyperLink ID="HyperLink2" href="ForgetPassword.aspx" runat="server">ForgetPassword</asp:HyperLink>
                            
                            </td>
                        </tr>
                    </table>
                  

               
                  
        
                <!-- ./ end service box -->
            </div>
            <!-- ./ end row -->
           
            <!-- ./ end row -->
        </div>
        <div class="clearfix">
        </div>
    </section>
    <!-- ./ End Service Section -->














</asp:Content>

