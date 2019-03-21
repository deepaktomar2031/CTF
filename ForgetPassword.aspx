<%@ Page Title="Forget Password" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="ForgetPassword.aspx.vb" Inherits="ForgetPassword" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


    <!-- Service Section -->
    <section id="services" class="padding50">
        <div class="container">
            <div class="row">
                <h2 class="background double animated wow fadeInUp" data-wow-delay="0.2s"><span><strong>F</strong>orget Password</span></h2>
            </div>
            <!-- ./ end row -->
            <div class="row">
               
                 <table class="style2">
                        <tr>
                            <td class="style3">
                                <asp:Label ID="Label2" runat="server" Text="Registration ID"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="TextBox1" runat="server" ></asp:TextBox>
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                                    ControlToValidate="TextBox1" ErrorMessage="Enrolment Number is Required" 
                                    ForeColor="Red"></asp:RequiredFieldValidator>
                            </td>
                        </tr>
                        <tr>
                            <td class="style3">
                                &nbsp;</td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style3">
                                &nbsp;</td>
                            <td>
                                <asp:Button ID="Button1" runat="server" Text="Recover" />
                                <asp:HyperLink ID="HyperLink1" runat="server" href="Login.aspx">Login</asp:HyperLink>
                                <asp:HyperLink ID="HyperLink2" runat="server" href="Registration.aspx">Registration</asp:HyperLink>
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

